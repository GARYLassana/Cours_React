const plantList = [
    {id: '1', name: 'monstera'},
    {id: '2', name: 'ficus lyrata'},
    {id: '3', name: 'pothos argenté'},
    {id: '4', name: 'yucca'},
    {id: '5', name: 'palmier'}
]

function ShoppingList() {
    return (
<ul className="list-group list-group-flush">
    {plantList.map((plant, index) => (
        <li key={`${index}`} className="list-group-item">{plant.id} - { plant.name }</li>
    ))}
</ul>
    )
}

export default ShoppingList