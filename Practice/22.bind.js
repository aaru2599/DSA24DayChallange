let obj = { name: "arvind" }
const newEntity = (0obj) => console.log(obj);

function mountEntity() {
    this.entity = newEntity;
    console.log(`Entity ${this.newEntity.name} is mounted on ${this}`);
}

mountEntity.call()