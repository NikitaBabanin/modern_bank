
const FormExtra = () => (
    <div className="flex items-center justify-between ">
        <div className="flex items-center">
            <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
            </label>
        </div>

        <div className="text-sm">
            <a href="src/components/Auth/FormExtra.jsx#" className="font-medium text-teal-600 hover:text-teal-500">
                Forgot your password?
            </a>
        </div>
    </div>
)

export default FormExtra
