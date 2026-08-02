function tick(){
    const now = new Date();
    document.getElementById('clock').textContent =
      'last_deploy: ' + now.toISOString().split('T')[0];
  }
  tick();