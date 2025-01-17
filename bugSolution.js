```javascript
db.collection('myCollection').findOne({"_id": ObjectId("651234567890")}).then(doc => {
  if (doc && typeof doc.counter === 'number') {
    db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {"$inc": {"counter": 1}});
  } else {
    console.error('Counter field is not a number or does not exist.');
    // Handle the case where counter is not a number (e.g., set a default value)
    db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {"$set": {"counter": 1}});
  }
});
```