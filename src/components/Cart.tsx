import MenuItem from "./MenuItem";

const Cart = () => {
    return <section className="max-w-md mx-auto">
        <h1>Cart</h1>
        <ul>
        <MenuItem item = {{
            name : 'Biryani',
            quantity : 2
        }} />

        <MenuItem item = {{
            name : 'Halwa Puri',
            quantity : 2
        }} />

        <MenuItem item = {{
            name : 'Chicken Handi',
            quantity : 2
        }} />
        </ul>
    </section>
}
export default Cart;