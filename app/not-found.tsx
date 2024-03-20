export default async function NotFound() {
	return (
		<section className="flex min-h-not-found items-center justify-center xl:-mt-16">
			<div className="font-medium">
				<h1>404: Page Not Found</h1>
				<p>Could not find requested resource.</p>
			</div>
		</section>
	);
}
