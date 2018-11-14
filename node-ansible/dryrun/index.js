var Ansible = require('node-ansible');

var playbook = new Ansible.Playbook().playbook('test');

playbook.inventory();
playbook.verbose();
playbook.dryRun();

var promise = playbook.exec();

promise.then(function(successResult) {
  console.log('Exit code: ', successResult.code);
  console.log(successResult.output);
}, function(error) {
  console.error(error);
});

