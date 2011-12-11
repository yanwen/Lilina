<?php

abstract class Lilina_Object {
	protected static function &_from_obj($class, $vars) {
		if (is_object($vars)) {
			$vars = get_object_vars($vars);
		}
		$real = new $class();
		foreach ($vars as $name => $value) {
			$real->$name = $value;
		}

		return $real;
	}
}