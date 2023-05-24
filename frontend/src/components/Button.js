const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} items-center border border-solid hover:py-3 hover:text-xl rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-900 focus:ring ring-gray-600 disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
