class Author {
  name = 'ITEM'
  age = 18
  email = '747309718@qq.com'

  info =  () => {
    return {
      name: this.name,
      age: this.age,
      email: this.email
    }
  }
}

module.exports = Author
