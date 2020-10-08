exports.register = async (userDetails) => {
  const collection = await global.db.collection('users');

  const existingEmail = await collection.find({ email: userDetails.email }).toArray();
  if (existingEmail.length > 0) return { error: 'Email already exists.' };
  const result = await collection.insertOne(userDetails);
  if (result.insertedCount === 1) {
    return {
      firstName: result.ops[0].firstName, lastName: result.ops[0].lastName, id: result.insertedId,
    };
  }
  throw new Error('Failed to create new user.');
};

exports.login = async (email) => {
  const collection = await global.db.collection('users');
  const result = await collection.findOne({ email });
  if (!result) return { error: 'User not found. Please check your email or your password and try again' };
  return result;
};
