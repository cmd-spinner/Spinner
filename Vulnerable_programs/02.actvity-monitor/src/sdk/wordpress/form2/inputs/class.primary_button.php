<?php

namespace plainview\sdk_pvam\wordpress\form2\inputs;

class primary_button
	extends button
{
	public function _construct()
	{
		$this->css_class( 'button-primary' );
	}
}
