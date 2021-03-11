<pre>0000055c <main>:</pre>
<pre> 55c:	b580      	push	{r7, lr}</pre>
<pre> 55e:	b08a      	sub	sp, #40	; 0x28</pre>
<pre> 560:	af02      	add	r7, sp, #8</pre>
<pre> 562:	f107 0208 	add.w	r2, r7, #8</pre>
<pre> 566:	f107 030c 	add.w	r3, r7, #12</pre>
<pre> 56a:	4619      	mov	r1, r3</pre>
<pre> 56c:	4b20      	ldr	r3, [pc, #128]	; (5f0 <main+0x94>)</pre>
<pre> 56e:	447b      	add	r3, pc</pre>
<pre> 570:	4618      	mov	r0, r3</pre>
<pre> 572:	f7ff ef60 	blx	434 <__isoc99_scanf@plt></pre>
<pre> 576:	68fa      	ldr	r2, [r7, #12]</pre>
<pre> 578:	68bb      	ldr	r3, [r7, #8]</pre>
<pre> 57a:	4413      	add	r3, r2</pre>
<pre> 57c:	61fb      	str	r3, [r7, #28]</pre>
<pre> 57e:	463a      	mov	r2, r7</pre>
<pre> 580:	1d3b      	adds	r3, r7, #4</pre>
<pre> 582:	4619      	mov	r1, r3</pre>
<pre> 584:	4b1b      	ldr	r3, [pc, #108]	; (5f4 <main+0x98>)</pre>
<pre> 586:	447b      	add	r3, pc</pre>
<pre> 588:	4618      	mov	r0, r3</pre>
<pre> 58a:	f7ff ef54 	blx	434 <__isoc99_scanf@plt></pre>
<pre> 58e:	ed97 7a01 	vldr	s14, [r7, #4]</pre>
<pre> 592:	edd7 7a00 	vldr	s15, [r7]</pre>
<pre> 596:	ee77 7a27 	vadd.f32	s15, s14, s15</pre>
<pre> 59a:	edc7 7a06 	vstr	s15, [r7, #24]</pre>
<pre> 59e:	68fa      	ldr	r2, [r7, #12]</pre>
<pre> 5a0:	68bb      	ldr	r3, [r7, #8]</pre>
<pre> 5a2:	1ad3      	subs	r3, r2, r3</pre>
<pre> 5a4:	617b      	str	r3, [r7, #20]</pre>
<pre> 5a6:	ed97 7a01 	vldr	s14, [r7, #4]</pre>
<pre> 5aa:	edd7 7a00 	vldr	s15, [r7]</pre>
<pre> 5ae:	ee77 7a67 	vsub.f32	s15, s14, s15</pre>
<pre> 5b2:	edc7 7a04 	vstr	s15, [r7, #16]</pre>
<pre> 5b6:	697a      	ldr	r2, [r7, #20]</pre>
<pre> 5b8:	69f9      	ldr	r1, [r7, #28]</pre>
<pre> 5ba:	4b0f      	ldr	r3, [pc, #60]	; (5f8 <main+0x9c>)</pre>
<pre> 5bc:	447b      	add	r3, pc</pre>
<pre> 5be:	4618      	mov	r0, r3</pre>
<pre> 5c0:	f7ff ef26 	blx	410 <printf@plt></pre>
<pre> 5c4:	edd7 7a06 	vldr	s15, [r7, #24]</pre>
<pre> 5c8:	eeb7 6ae7 	vcvt.f64.f32	d6, s15</pre>
<pre> 5cc:	edd7 7a04 	vldr	s15, [r7, #16]</pre>
<pre> 5d0:	eeb7 7ae7 	vcvt.f64.f32	d7, s15</pre>
<pre> 5d4:	ed8d 7b00 	vstr	d7, [sp]</pre>
<pre> 5d8:	ec53 2b16 	vmov	r2, r3, d6</pre>
<pre> 5dc:	4907      	ldr	r1, [pc, #28]	; (5fc <main+0xa0>)</pre>
<pre> 5de:	4479      	add	r1, pc</pre>
<pre> 5e0:	4608      	mov	r0, r1</pre>
<pre> 5e2:	f7ff ef16 	blx	410 <printf@plt></pre>
 <pre>5e6:	2300      	movs	r3, #0</pre>
 <pre>5e8:	4618      	mov	r0, r3</pre>
 <pre>5ea:	3720      	adds	r7, #32</pre>
 <pre>5ec:	46bd      	mov	sp, r7</pre>
 <pre>5ee:	bd80      	pop	{r7, pc}</pre>
 <pre>5f0:	000000de 	.word	0x000000de</pre>
 <pre>5f4:	000000ce 	.word	0x000000ce</pre>
 <pre>5f8:	00000090 	.word	0x00000090</pre>
 <pre>5fc:	0000007e 	.word	0x0000007e</pre>
