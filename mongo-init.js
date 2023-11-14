db.createUser({
  user: 'what',
  pwd: 'who',
  roles: [
    {
      role: 'readWrite',
      db: 'sleepr',
    },
  ],
});
