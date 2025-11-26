export default function Logo() {
	return (
		<div className="flex gap-2 items-center">
			<img src="logo.svg" width={'50px'} className="rounded-full" />
			<div className="flex flex-col justify-center items-center gap-0 mt-1">
				<p className="leading-4">PDxWork</p>
			</div>
		</div>
	)
}