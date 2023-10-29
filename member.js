function skillsMember() {
  console.log('skillsMember');
  var member = document.getElementById('member');
  var skills = document.getElementById('skills');
  var contact = document.getElementById('contact');
  var memberActive = document.getElementById('memberActive');
  var skillsActive = document.getElementById('skillsActive');
  var contactActive = document.getElementById('contactActive');
  member.style.display = "block";
  skills.style.display = "none";
  contact.style.display = "none";
  memberActive.style.backgroundColor = "#FFC107";
  skillsActive.style.backgroundColor = "#00BCD4";
  contactActive.style.backgroundColor = "#00BCD4";
}