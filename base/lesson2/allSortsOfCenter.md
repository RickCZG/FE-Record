##水平居中：
	居中inline-*元素，父元素是block元素，text-align：center；
	居中block元素，margin： 0 auto；
	居中多个block元素，水平居中于一行，将它们都设为display：inline-block；
	
##垂直居中：
	单行文本，padding-top与padding-bottom相等或者line-height与height相等
	多行文本，父元素display：table，文本的容器元素设为display：table-cell；vertical-align：middle
	block元素，flex
			   有height：absolute+margin-top
			   无height：absolute+transform：translateY（50%）