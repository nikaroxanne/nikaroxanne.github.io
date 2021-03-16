bitwise_operators_notes

Stack frames are like artifacts, or breadcrumbs. The return address is always pushed onto the stack when calling a function, so that, upon return from the function, the program knows which address to go back to.

Perhaps we could consider this like the experience of getting directions in a country in which you do not speak the language. 
I'll give you a hypothetical scenario as an explanation of stack frames and return addresses by way of analogy.

Pretend that you are in an airport in a country for which you do not speak the language. For the purposes of this hypothetical, so as not to exclude any of our dear readers on planet Earth, let's just pretend that you've landed at an intergalatic airport, on the planet Tralfamador (if you are a native speaker of Tralfamadorian, my apologies, Mr. Vonnegut.) You've just disembarked off your shuttle and are making your way through the Intergalatic Tralfamadorian Airport. As you are walking towards the exit, you realize you have lost the address of the hotel that you have booked, and you do not know Tralfamadorian script to write it down, or how you would even try to find it on a map. You ask a few of your fellow disembarking passengers if they can translate the name of the hotel and write it down for you, and sure enough, one such passenger is kind enough to stop for a few minutes to help you with this task.

The kind stranger you have met (we will assume truth in the assessment of kindness in this scenario), writes down on a piece of paper the exact address of the hotel that you are looking for. You want to make sure that you remember this address, so you open your backpack and put the piece of paper with the address at the very front of the stack of papers in one backpack compartment. You then zip the backpack shut, and make a quick detour through the Duty-free to buy some discounted chocolate (or vodka or cigarettes, or all of them, or none, I don't know your shopping preferences, this is a hypothetical, calm down). When you exit the duty free store, bags of discounted goods on your arms like a decked out Christmas mantle, you can reach into your backpack, pull out the piece of paper from the top of the stack of papers, see the address and walk over to a taxi in front of the airport and hand that piece of paper with the address to the taxi driver so that they can drive you to your next destination.

In this hypothetical, the address on the paper is the return address from the function, saving the paper with the address by putting the paper in your backpack at the front (top) of the stack of papers in your backpack is akin to saving the return address on the top of the stack. Going through the routine of purchasing items in the Duty-free shop is like executing the routines of a particular function. And then, after you have finished making the purchase at the register, taking out the saved piece of paper with the address from your backpack is akin to popping that address off the stack. 



***

Alright, back to it.

Here is our max_and function.



Okay, so at the beginning of the max_and function, we have a push{r7} instruction (line 7), which pushes our return address {r7}, onto the stack. Then, on line 8 there is a sub instruction, setting up the alignment for our stack frame by subtracting 28 (we know it is the literal value 28, because of the # qualifier) from the stack pointer register (sp). 
And then we have an instruction that adds sp (a pointer) plus 0, so sp, to the value at r7. So the instruction on line 9 is adding the value &(*(sp - 28)) to r7. 
Why? 
Since our (return) address stored in r7 was already pushed onto the stack, so we know that the top of the stack contains the value {r7}, but the value in sp was decreased by 28, so sp is now pointing to the address (&sp - 28). This is the size of the stack frame for this function -- 28. This makes sense given that the the four parameters are all ints, and 4X4 = 16, which leaves 12 bytes left for whatever miscellaneous stack frame debauchery our program has in store for us next. Buckle up!!



Lines 7 - 13 of the ARM disassembly are essentially equivalent to line 2 of our C program. We have our function that has been called with four parameters, all of which are ints.
Since these are all ints, we know that the size of each parameter will be 4 bytes, (because we're running an elf32 binary, so we can make the assumption that we have a 32-bit architecture, and thus 4 byte ints are standard. (See this Stack Overflow response for an interesting discussion on this point: "https://stackoverflow.com/questions/11438794/is-the-size-of-c-int-2-bytes-or-4-bytes")).

Then on lines 10-13, there are four subsequent str instructions, storing the values located at r0, r1, r2, r3 to the address pointed to by the pointers in the following locations (r7 + 12, r7+8, r7+ 4, r7+ 0).

Hmm... so if we think about this, we can deduce that our stack frame looks like this:



sp + 12		r0
sp + 8		r1
sp + 4		r2
sp 			r3


So r0 is in our stack at offset + 12.

Then we have a load instruction that loads the value at (r7 + 12), which is remember, equivalent to (sp + 12), into the register r3. So, all together now... what's in r3?

Yes, you're right! It's r0! I'm tossing my virtual hat in the air to celebrate! I'm throwing you a parade! Deductive logic is a dream!

I wish I could use exclamations in a way that doesn't sound sardonic. Actually, no I don't. Sardonic, not sarcastic though. I really do think assembly is a dream, I just have to keep up the postmodern posturing, for the sake of ~*aesthetic.*~ 

It's r0, you got it. And if you didn't, that's okay. You're still reading, that deserves a veritable confetti shower.

Let's keep going.

On line 14, we have an add instruction, that adds 1 to the value in r3.
Equivalent to r3 += 1

And we remember that r3 contained the value r0, and it now contains r0 + 1.
So, really, r3 = r0 + 1

What is the equivalent of this in the C program? Line 3. Literally just line 3. 

What does this tell us though?
Well, since the values that we stored in r7 (pushed onto the stack) on lines 10-13 were r3,r2,r1,r0 (in order of increasing memory addresses on the stack), we can deduce that r0-r3 are arguments to the function, and r0 is the first of those arguments. At this point, we don't know whether the type of those values, but we know that they are each 4 bytes so, they are likely either ints or pointers, or a combination.

So, using this reasoning, we can say that r0-r3 are equal to the values of arg1-arg4 respectively.
So, now we know r3 = arg1 + 1

~*Siq*~ we've now covered up through line 3 of our C program.

Onwards.

On line 16 we have another str instruction, which stores the value in r3 (b, which currently has the value a + 1 in our C program, or arg1 +1) at address r7 + 20 (again, this means sp + 20, because r7 is our stack base pointer).

On line 17 we have a branch instruction. Okay, things are getting interested, hello hello.

This is a b, so an unconditional branch instruction /*maybe delete this parenthetical */(not a conditional branch, the $PC will be equal to $PC + 5a8 + 1, because ARM is special and likes to add one byte offsets) to 5a8 in this function, or 0x4c from the address of the beginning of the function. So, we're going to take a little branch detour and jump (ha) down to line 45 (0x5a8). 

On line 45, the value at r7 + 12 is loaded into r3. That sounds familiar... oh, right, that's the address where the value of arg1 was stored (in our C program, arg1 is a).
On line 46, the value at r7 + 20 is loaded into r2. Remember from before that the value at this adddress is the variable b.
On line 47, we have a cmp instruction, which compares the values in r2 and r3 and sets corresponding flags.
This performs comparison_value = r2 - r3, and then, depending upon the value of comparison_value, will set the corresponding flags. This doesn't change the values in the operand registers however.

Note, this is different from some architectures (namely x86), where a cmp instruction stores the result of a comparison in the first operand. **

On line 47, we have a conditional branch. So, there are checks for two flags: the Z (zero) flag and the N (Negative) flag. 
Let's find our C idiom though. r2 is b, r3 is a. The cmp instruction computes the value r2 - r3, and stores the result in the flags register.
The instruction on this line is bge (branch if greater than or equal to), which checks the result from the cmp operation and branches if operand1 <= operand 2, which is equivalent in this case to (b <= a).

And well what a funny coincidence, that is the first half of the conditional of the outer while loop on line 4 of our C program!! I mean, it's not a coincidence at all. It's logical. 


Okay, so let's continue. We've come to the Robert Frost portion of our idiom -- two roads diverged. Don't worry, this is the only time I'll reference that (*hyperlink here*) Frost poem. There are going to be more branches up ahead and I'm not really feeling up for recursive Frosts.

We've got two paths here, so I'll split my text accordingly:

Path 1. (a < b) -- bge operation returns false, branch not taken, execution resumes at the next instruction from the current $pc.

Path 2. (a >= b) - bge operation returns true, branch taken, execution jumps and $pc now at 5b8.

Let's take path 1 for now, and we'll come back to path 2 to see where it leads.

If we take path 1, we continue execution from the next instruction, so we're at line 49.

On line 49, the value at r7 + 20 is loaded into r2. We know this value by now, variable b is stored at that address. So r2 = b.
On line 50, the value at r7 + 8 is loaded into r3. Ah, okay a different offset, but we have seen this before, during the intitialization and setting up of the stack frame. The value at r7 + 8 is arg2. So r3 = arg2 (which is the variable n in our C program).

On line 51, we have another comparison, cmp r2 r3.
On line 52, we have another conditional branch. The instruction on this line is ble (branch if less than or equal to),
The conditional branch is checking if the result of that comparison indicated that operand1 <= operand2, so now we're checking if (b <= arg2) or (b <= n).

Again, we have two paths, I'll call these paths 1a and 1b (because we're on path 1 from our previous conditional):
Path 1a: (b > n) -- ble operation returns false, branch not taken, execution resumes at the next instruction from current $pc, which is 5b8

Path 1b: (b <= n) -- ble operation returns true, branch taken, execution jumps and $pc now at 0x594.


That's so funny... that's the inverse of the ordering for Path 1 and Path 2, but to the SAME ADDRESS.



Okay, so this part needs a bit of untangling.
We have two consecutive sequences of the following [2 load instructions, one cmp instruction, one conditional branch instruction]
Like in our C program, where two consecutive comparisons form the conditional for the outer while loop, there are two consecutive comparisons here. But the first comparison in ARM Assembly inverts the logic of the first comparison in the C program.
Let's draw a picture. 



start -> set up stack
			VVV
		initialize variables
			VVV branch --------------------> conditional 1   t 		
											   	|			--->	
											  f | 						a++
												V 						b = a + 1
												conditional 2 	f 		return		
												|				--->
											  t |
												|
												V
											branch to inner loop!!



I'm glad we drew that picture. It's all clear now. Class dismissed.

Just kidding, we've got a nested while loop because Nietzche was right and God is dead xoxo

Okay, so let's take path 1b, because Path 1a, 2a and 2b all go to the same place (0x5b8).
Path 1b means that the ble operation is true and $pc goes to 0x594, which is line 35.

On line 35, the value at r7 + 20 is loaded into r2. So, r2 = &(*(r7 + 20)), or r2 = b.
On line 36, the value at r7 + 8 is loaded into r3. So r3 = &(*(r7 + 8)), or r3= 
On line 37, we have a comparison, cmp r2 r3.

What a familiar construct to us at this point. One could even surmise that we may be developing a knack of what such a pattern of instructions may be indicative...

There it is! On line 38, conditional branch, ble (branch if less than or equal to).
So if (r2 <= r3), the branch is taken and $pc jumps to 0x572, which is line 18.

On line 18, we see the same pattern
line 18: The value r7 + 12 is loaded into r2. So, r2 = &(*(r7 + 12)), or r2 = arg3
line 19: The value r7 + 20 is loaded into r3. So, r2 = &(*(r7 + 20)), or r2 = b
line 20: Comparison, cmp r2 r3

line 21:
line 22:
line 23:



