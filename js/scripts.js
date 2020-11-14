// Get form elements
var elFormContact = $('.js-form-contact');
var elInputName = $('.js-input-name', elFormContact);
var elInputLastname = $('.js-input-lastname', elFormContact);
var elInputContact = $('.js-input-contact', elFormContact);
var elInputRelationship = $('.js-input-relationship', elFormContact);
var elResultBoxContact = $('.js-result-box-contact');

// Create empty array
var contactArray = [];


// Main function
var addContact = function (evt) {
  evt.preventDefault();

  // Get trimmed values from inputs
  var inputName = elInputName.value.trim();
  var inputLastname = elInputLastname.value.trim();
  var inputContact = elInputContact.value.trim();
  var inputRelationship = elInputRelationship.value.trim();


  // Prevent empty value
  if (!inputName || !inputLastname || !inputContact || !inputRelationship) {
    return;
  }


  // Push contact objects to array
  contactArray.push({
    name: inputName,
    lastname: inputLastname,
    contact: inputContact,
    relationship: inputRelationship
  });


  // Empty elResultBoxContact
  elResultBoxContact.innerHTML = '';


  // Loop to create elements and add all info
  for (let i = 0; i < contactArray.length; i++) {

    // New ul
    var elNewList = document.createElement('ul');
    elNewList.classList.add('list-group', 'list-unstyled', 'mb-3');
    elResultBoxContact.appendChild(elNewList);

    // Name
    var elNewNameLi = document.createElement('li');
    elNewNameLi.textContent = `Name: ${contactArray[i].name}`;
    elNewNameLi.classList.add('list-group-item');
    elNewList.appendChild(elNewNameLi);

    // Lastname
    var elNewLastnameLi = document.createElement('li');
    elNewLastnameLi.textContent = `Lastname: ${contactArray[i].lastname}`;
    elNewLastnameLi.classList.add('list-group-item');
    elNewList.appendChild(elNewLastnameLi);

    // Contact
    var elNewContactLi = document.createElement('li');
    elNewContactLi.textContent = `Contact: ${contactArray[i].contact}`;
    elNewContactLi.classList.add('list-group-item');
    elNewList.appendChild(elNewContactLi);

    // Relationship
    var elNewRelationshipLi = document.createElement('li');
    elNewRelationshipLi.textContent = `Relationship: ${contactArray[i].relationship}`;
    elNewRelationshipLi.classList.add('list-group-item', 'list-group-action');
    elNewList.appendChild(elNewRelationshipLi);
  }


}


// Add function to submit event of elFormContact
elFormContact.addEventListener('submit', addContact);

/* Just for reference */
console.log(contactArray);