const Button = ({ type = 'submit',className, ...props }) => (
    <button 
        type={type}
        className={`${className} items-center border border-solid font-semibold uppercase tracking-widest  active:bg-green-500 focus:outline-none focus:border-gray-900 rounded-xl focus:ring ring-gray-600 disabled:opacity-25 transition ease-in-out duration-150`}
        
        {...props}
    />
)

export default Button
