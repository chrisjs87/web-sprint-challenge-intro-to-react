// Write your Character component here

export default function Character(props){
    const { charName, charAge } = props;

    return(
        <div>
            <h2>{charName}</h2>
            <p>{charAge}</p>
        </div>
    );
}
