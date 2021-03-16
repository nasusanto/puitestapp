function Cow(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = “An icon of a cow”;
    this.image = “cow.png”;
  }
  
  function Panda(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = “An icon of a panda”;
    this.image = “panda.png”;
  }
  
  function Penguin(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = “An icon of a penguin”;
    this.image = “penguin.png”;
  }
  
  var animals = [new Cow(), new Panda(), new Penguin()];
  var names = ["Jack", "Thomas", "Bob", "Peter", "Carla", "Betty"]

  function generateRandomIndex(maxIndex) {
      return Math.floor(Math.random() * maxIndex);
  }

  function generateRandomAge() {
      return generateRandomIndex(10);
  }

  function generateRandomAnimal() {
      var randomIndex = generateRandomIndex(3);
      var randomAnimal = animals[randomIndex];

      if (randomAnimal instanceof Cow) {
          return new Cow(generateRandomName(), generateRandomAge());
      } else if (randomAnimal instanceof Panda) {
          return new Panda(generateRandomName(), generateRandomAge());
      } else if (randomAnimal instanceof Penguin) {
          return new Penguin(generateRandomName(), generateRandomAge());
      }
  }

  function onLoad() {
    var animal = generateRandomAnimal();
    console.log(animal)
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    var imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  }

