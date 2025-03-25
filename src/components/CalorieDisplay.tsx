interface ICalorieDisplayProps {
    calories: number,
    text: string
}


export default function CalorieDisplay({ calories, text }: ICalorieDisplayProps) {
    return (
        <p className="text-white font-bold founded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-6xl text-orange"> {calories}</span>
            {text}

        </p>
    )
}
