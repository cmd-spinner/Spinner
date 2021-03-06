<?php
register_module([
	"name" => "Old Default Parser",
	"version" => "0.10",
	"author" => "Johnny Broadway & Starbeamrainbowlabs",
	"description" => "The *old* default parser for Pepperminty Wiki. Based on Johnny Broadway's Slimdown (with more than a few modifications). This parser's features are documented in the help page. Superceded by a customised extension of parsedown extra.",
	"id" => "parser-default-old",
	"optional" => true,
	"code" => function() {
		global $settings;
		
		add_parser("default", function($markdown) {
			return Slimdown::render($markdown);
		});
		
		// Register the help section
		if($settings->parser != "default")
			return; // Don't register the help section if we aren't the currently set parser.
		add_help_section("20-parser-default", "Editor Syntax", "<p>$settings->sitename's editor uses a modified version of slimdown, a flavour of markdown that is implementated using regular expressions. See the credits page for more information and links to the original source for this. A quick reference can be found below:</p>
		<table>
			<tr><th>Type This</th><th>To get this</th>
			<tr><td><code>_italics_</code></td><td><em>italics</em></td></tr>
			<tr><td><code>*bold*</code></td><td><strong>bold</strong></td></tr>
			<tr><td><code>~~Strikethrough~~</code></td><td><del>Strikethough</del></td></tr>
			<tr><td><code>`code`</code></td><td><code>code</code></td></tr>
			<tr><td><code># Heading</code></td><td><h2>Heading</h2></td></tr>
			<tr><td><code>## Sub Heading</code></td><td><h3>Sub Heading</h3></td></tr>
			<tr><td><code>[[Internal Link]]</code></td><td><a href='index.php?page=Internal Link'>Internal Link</a></td></tr>
			<tr><td><code>[[Display Text|Internal Link]]</code></td><td><a href='index.php?page=Internal Link'>Display Text</a></td></tr>
			<tr><td><code>[Display text](//google.com/)</code></td><td><a href='//google.com/'>Display Text</a></td></tr>
			<tr><td><code>&gt; Blockquote<br />&gt; Some text</code></td><td><blockquote> Blockquote<br />Some text</td></tr>
			<tr><td><code> - Apples<br /> * Oranges</code></td><td><ul><li>Apples</li><li>Oranges</li></ul></td></tr>
			<tr><td><code>1. This is<br />2. an ordered list</code></td><td><ol><li>This is</li><li>an ordered list</li></ol></td></tr>
			<tr><td><code>
		---
		</code></td><td><hr /></td></tr>
			<!--<tr><tds><code> - One
	 - Two
	 - Three</code></td><td><ul><li>One</li><li>Two</li><li>Three</li></ul></td></tr>-->
			<tr><td><code>![Alt text](//starbeamrainbowlabs.com/favicon-small.png)</code></td><td><img src='//starbeamrainbowlabs.com/favicon-small.png' alt='Alt text' /></td></code>
		</table>
		
		<p>In addition, the following extra syntax is supported for images:</p>
		
		<pre><code>Size the image to at most 250 pixels wide:
	![Alt text](//starbeamrainbowlabs.com/favicon-small.png 250px)
	
	Size the image to at most 120px wide and have it float at the right ahnd size of the page:
	![Alt text](//starbeamrainbowlabs.com/favicon-small.png 120px right)</code></pre>");
	}
]);

/***********************************************************************
 * ????????????????????? ??????      ?????? ?????????    ????????? ??????????????????   ??????????????????  ??????     ?????? ?????????    ??????  *
 * ??????      ??????      ?????? ????????????  ???????????? ??????   ?????? ??????    ?????? ??????     ?????? ????????????   ??????  *
 * ????????????????????? ??????      ?????? ?????? ???????????? ?????? ??????   ?????? ??????    ?????? ??????  ???  ?????? ?????? ??????  ??????  *
 *      ?????? ??????      ?????? ??????  ??????  ?????? ??????   ?????? ??????    ?????? ?????? ????????? ?????? ??????  ?????? ??????  *
 * ????????????????????? ????????????????????? ?????? ??????      ?????? ??????????????????   ??????????????????   ????????? ?????????  ??????   ????????????  *
 ***********************************************************************/
/**
 * Slimdown - A very basic regex-based Markdown parser. Supports the
 * following elements (and can be extended via Slimdown::add_rule()):
 *
 * - Headers
 * - Links
 * - Bold
 * - Emphasis
 * - Deletions
 * - Quotes
 * - Inline code
 * - Blockquotes
 * - Ordered/unordered lists
 * - Horizontal rules
 *
 * Author: Johnny Broadway <johnny@johnnybroadway.com>
 * Website: https://gist.github.com/jbroadway/2836900
 * License: MIT
 */

/**
 * Modified by Starbeamrainbowlabs (starbeamrainbowlabs)
 * 
 	* Changed bold to use single asterisks
 	* Changed italics to use single underscores
 	* Added one to add the heading levels (no <h1> tags allowed)
 	* Added wiki style internal link parsing
 	* Added wiki style internal link parsing with display text
 	* Added image support
 */
class Slimdown {
	public static $rules = array (
		'/\r\n/' => "\n",											// new line normalisation
		'/^(#+)(.*)/' => 'self::header',								// headers
		'/(\*+)(.*?)\1/' => '<strong>\2</strong>',					// bold
		'/(_)(.*?)\1/' => '<em>\2</em>',							// emphasis
		
		'/!\[(.*)\]\(([^\s]+)\s(\d+.+)\s(left|right)\)/' => '<img src="\2" alt="\1" style="max-width: \3; float: \4;" />',		// images with size
		'/!\[(.*)\]\(([^\s]+)\s(\d+.+)\)/' => '<img src="\2" alt="\1" style="max-width: \3;" />',		// images with size
		'/!\[(.*)\]\((.*)\)/' => '<img src="\2" alt="\1" />',		// basic images
		
		'/\[\[([a-zA-Z0-9\_\- ]+)\|([a-zA-Z0-9\_\- ]+)\]\]/' => '<a href=\'index.php?page=\1\'>\2</a>',	//internal links with display text
		'/\[\[([a-zA-Z0-9\_\- ]+)\]\]/' => '<a href=\'index.php?page=\1\'>\1</a>',	//internal links
		'/\[([^\[]+)\]\(([^\)]+)\)/' => '<a href=\'\2\' target=\'_blank\'>\1</a>',	// links
		'/\~\~(.*?)\~\~/' => '<del>\1</del>',						// del
		'/\:\"(.*?)\"\:/' => '<q>\1</q>',							// quote
		'/`(.*?)`/' => '<code>\1</code>',							// inline code
		'/\n\s*(\*|-)(.*)/' => 'self::ul_list',						// ul lists
		'/\n[0-9]+\.(.*)/' => 'self::ol_list',						// ol lists
		'/\n(&gt;|\>)(.*)/' => 'self::blockquote',					// blockquotes
		'/\n-{3,}/' => "\n<hr />",									// horizontal rule
		'/\n([^\n]+)\n\n/' => 'self::para',							// add paragraphs
		'/<\/ul>\s?<ul>/' => '',									// fix extra ul
		'/<\/ol>\s?<ol>/' => '',									// fix extra ol
		'/<\/blockquote><blockquote>/' => "\n"						// fix extra blockquote
	);
	private static function para ($regs) {
		$line = $regs[1];
		$trimmed = trim ($line);
		if (preg_match ('/^<\/?(ul|ol|li|h|p|bl)/', $trimmed)) {
			return "\n" . $line . "\n";
		}
		return sprintf ("\n<p>%s</p>\n", $trimmed);
	}
	private static function ul_list ($regs) {
		$item = $regs[2];
		return sprintf ("\n<ul>\n\t<li>%s</li>\n</ul>", trim($item));
	}
	private static function ol_list ($regs) {
		$item = $regs[1];
		return sprintf ("\n<ol>\n\t<li>%s</li>\n</ol>", trim($item));
	}
	private static function blockquote ($regs) {
		$item = $regs[2];
		return sprintf ("\n<blockquote>%s</blockquote>", trim($item));
	}
	private static function header ($regs) {
		list ($tmp, $chars, $header) = $regs;
		$level = strlen ($chars);
		return sprintf ('<h%d>%s</h%d>', $level + 1, trim($header), $level + 1);
	}
	
	/**
	 * Add a rule.
	 */
	public static function add_rule ($regex, $replacement) {
		self::$rules[$regex] = $replacement;
	}
	/**
	 * Render some Markdown into HTML.
	 */
	public static function render ($text) {
		foreach (self::$rules as $regex => $replacement) {
			if (is_callable ( $replacement)) {
				$text = preg_replace_callback ($regex, $replacement, $text);
			} else {
				$text = preg_replace ($regex, $replacement, $text);
			}
		}
		return trim ($text);
	}
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

?>
