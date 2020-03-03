
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

/*
var animation = d3.select("#constitutionimg")
//animation.classed("run-animation", false);





