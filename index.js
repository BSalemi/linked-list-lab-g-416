let collection = {randnm: {name: 'Alexandra', next: 'masjdrandm'},
  masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
  ntrandm: {name: 'Juliet', next: null}
}

function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  let nextNode = node.next;

  return collection[`${nextNode}`];
}

function nodeAt(index, linkedList, collection){
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     currentNode = next(currentNode, collection);
  }
  return currentNode
}
