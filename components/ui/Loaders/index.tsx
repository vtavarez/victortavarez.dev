export function BouncingLoader() {
	return (
		<div className="flex justify-center">
			<div className="dot animate-loader"></div>
			<div className="dot animation-delay-200 animate-loader"></div>
			<div className="dot animation-delay-400 animate-loader"></div>
		</div>
	);
}
