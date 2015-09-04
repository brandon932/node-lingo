// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

    // make the age verification window stay up until it is completed
  $('#ageModal').modal({
    backdrop:'static',
    keyboard:false,
    show:true
  });

});
