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

function next(node){
  return node.next
}
