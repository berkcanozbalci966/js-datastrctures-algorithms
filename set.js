function mySet() {
    
    var collection = [];

    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    }
    this.values = function () {
        return collection;
    }
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element)
            return true
        }
        return false
    }

    this.remove = function (element) {
        if (this.has(element)) {
            const elementIndex = collection.indexOf(element)
            collection.splice(elementIndex, 1)
            return true
        }
        return false
    }

    this.size = function () {
        return collection.length;
    }

    this.union = function (otherSet) {
        const unionSet = new mySet()
        const firstSet = this.values()
        const secondSet = otherSet.values()
        firstSet.forEach((e) => {
            unionSet.add(e)
        })
        secondSet.forEach((e) => {
            unionSet.add(e)
        })

        return unionSet
    }


    this.intersection = function (otherSet) {
        const intersectionSet = new mySet()
        const firstSet = this.values()
        const secondSet = otherSet.values()

        firstSet.forEach((e) => {
            if (secondSet.has(e)) {
                intersectionSet.add(e)
            }
        })
        return intersectionSet.values()
    }

    this.diff = function (otherSet) {
        const diffSet = new mySet();
        const firstSet = this.values()
        const secondSet = this.otherSet()

        firstSet.forEach((e) => {
            if (!secondSet.has(e)) {
                diffSet.add(e)
            }
        })

        return diffSet.values()


    }
    

}

