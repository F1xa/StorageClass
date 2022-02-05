class Storage {

  constructor(names, value = 'local') {
    this.names = names;
    this.options = function() {
      return value === 'local' ? localStorage : 
             value === 'session' ? sessionStorage :
             false
    }
  }

  set(value) {
    this.options().setItem(this.names, JSON.stringify(value))
  }

  get() {
   return JSON.parse(localStorage.getItem(this.names))
  }

  clear() {
    localStorage.removeItem(this.names)
  }

  isEmpty() {
    return this.get() ? false : true
  }
}

