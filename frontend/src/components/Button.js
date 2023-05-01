const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 bg-[#C9C9C9] border border-transparent rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-900 focus:ring ring-gray-600 disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
