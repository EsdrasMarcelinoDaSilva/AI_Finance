type Params = {
    id: string
}
type TransactionProps = {
    params: Params
}
const Transaction = ({ params }: TransactionProps) => {
    const { id } = params
    return ( 
        <h1>Transaction {id}</h1>
     )
}
 
export default Transaction