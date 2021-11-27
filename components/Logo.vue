<template>
	<div class="heading">
		<h1>Drago Digitale{{ addition ? ": " + addition : "" }}</h1>
		<p><i>&emsp; Trevor Martin - 19UV</i></p>
	</div>
</template>

<script>
export default {
	name: "Logo",
	props: ["addition"]
}
</script>
