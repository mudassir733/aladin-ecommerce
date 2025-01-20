export default function ToggleSwitch({ enabled, onChange }) {
    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={enabled}
                    onChange={onChange}
                />
                <div className={`block w-14 h-8 rounded-full ${enabled ? 'bg-primaryExtraLight' : 'bg-primaryLight'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${enabled ? 'transform translate-x-6' : ''}`}></div>
            </div>
        </label>
    )
}

