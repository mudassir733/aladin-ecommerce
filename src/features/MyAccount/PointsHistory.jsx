const history = [
    { id: 1, description: 'Purchase - Order #1234', points: 50, date: '2024-01-15' },
    { id: 2, description: 'Review submitted', points: 10, date: '2024-01-10' },
    { id: 3, description: 'Birthday bonus', points: 100, date: '2024-01-01' },
    { id: 4, description: 'Purchase - Order #1189', points: 30, date: '2023-12-28' },
]

export default function PointsHistory() {
    return (
        <div className="space-y-4">
            {history.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-primaryLight rounded-lg">
                    <div>
                        <h3 className="text-white font-medium">{item.description}</h3>
                        <p className="text-sm text-gray-300">{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                    <p className="text-teal-300 font-medium">+{item.points} points</p>
                </div>
            ))}
        </div>
    )
}

