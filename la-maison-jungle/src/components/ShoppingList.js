const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function ShoppingList() {
    return (
<ul className="list-group list-group-flush">
    {plantList.map((plant, index) => (
        <li key={`${index}`} className="list-group-item">{index} - { plant }</li>
    ))}
</ul>
    )
}

export default ShoppingList