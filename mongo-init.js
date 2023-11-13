db = db.getSiblingDB('sleepr');
db.createUser({
  user: 'monguser',
  pwd: 'mongpass',
  roles: [
    {
      role: 'readWrite',
      db: 'sleepr',
    },
  ],
});
