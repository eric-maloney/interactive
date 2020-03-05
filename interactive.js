
d3.select("#george")
      .on("mouseover", function()
      {
         d3.select(this)
         .attr("src","george washington deleware.jpg")
    })
    .on("mouseleave",function()
       {
        d3.select(this)
        .attr("src","george washington portrait.jpg")
    })

d3.select("#george")
    .on("click",function()
       {
        d3.select("#description")
            .text("George Washington was also a revered General for the the American Colonists during the War. This image depicts Washington crossing the Delaware River to attack Enemy soldiers during the winter.")
})

d3.select("#constitutionimg")
    .on("click",function()
       {
        d3.select(".text")
            .text("We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.")
})



