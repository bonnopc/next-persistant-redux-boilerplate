export default function LandingComponent(props){
    return (
        <main className="flex items-center justify-center text-center h-screen">
            <h3 className="text-7xl">{props.home.message}</h3>
        </main>
    )
}