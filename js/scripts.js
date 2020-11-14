// Get form elements
var elFormContact = $('.js-form-contact');
var elInputName = $('.js-input-name', elFormContact);
var elInputLastname = $('.js-input-lastname', elFormContact);
var elInputContact = $('.js-input-contact', elFormContact);
var elInputRelationship = $('.js-input-relationship', elFormContact);
// Get result elements
var elResultBoxContact = $('.js-result-box-contact');
var elResultName = $('.js-result-name', elResultBoxContact);
var elResultLastname = $('.js-result-lastname', elResultBoxContact);
var elResultContact = $('.js-result-contact', elResultBoxContact);
var elResultRelationship = $('.js-result-relationship', elResultBoxContact);


var contactObject = {
  name: '',
  lastname: '',
  contact: '',
  relationship: ''
};


var addContact = function () {

  // Get trimmed values from inputs
  var inputName = elInputName.value.trim();
  var inputLastname = elInputLastname.value.trim();
  var inputContact = elInputContact.value.trim();
  var inputRelationship = elInputRelationship.value.trim();


  // Prevent empty value
  if (!inputName || !inputLastname || !inputContact || !inputRelationship) {
    return;
  }

  contactObject.name = inputName;
  contactObject.lastname = inputLastname;
  contactObject.contact = inputContact;
  contactObject.relationship = inputRelationship;


  elResultName.textContent = contactObject.name;
  elResultLastname.textContent = contactObject.lastname;
  elResultContact.textContent = contactObject.contact;
  elResultRelationship.textContent = contactObject.relationship;




}

console.log(contactObject);


// Prevent submit default from form
elFormContact.addEventListener('submit', function (evt) {
  evt.preventDefault();
})


elInputName.addEventListener('change', addContact);
elInputLastname.addEventListener('change', addContact);
elInputContact.addEventListener('change', addContact);
elInputRelationship.addEventListener('change', addContact);