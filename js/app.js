
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore();
  const createThing = document.getElementById('btn');
  const thingsList = document.getElementById('thingsList');
  let thingsRef;
  let unsubscribe;
  thingsRef = db.collection('things')
  unsubscribe = thingsRef
  createThing.onclick = () => {
    var imageSrc = document.getElementById("text1").value;
    var url = document.getElementById("text2").value;
  
    var img = new Image();
    img.onload = function () {
      if (validURL(url)) {//works
        const { serverTimestamp } = firebase.firestore.FieldValue;
        thingsRef.add({
          //uid: user.uid,
          image: document.getElementById("text1").value,
          link: document.getElementById("text2").value,
          createdAt: serverTimestamp()
        });
        document.getElementById("text1").value = "";
        document.getElementById("text2").value = "";
        alert("Success!");
      }
      else {
        alert("Sorry, that link doesn't seem to be valid! Please try again.");
      }
    };
    img.onerror = function () {
      alert("Sorry, we can't seem to find that image! Please try again.");
    }; // doesn't work
    img.src = imageSrc;
  
  }
  
  
  
  
  
