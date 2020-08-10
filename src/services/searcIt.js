

let searchIt = (term) => (item) =>
item.type.toLowerCase().includes(term.toLowerCase());

export default searchIt