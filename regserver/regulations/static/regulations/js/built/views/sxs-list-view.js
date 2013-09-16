define("sxs-list-view",["jquery","underscore","backbone","dispatch","sidebar-list-view","./folder-model","sxs-view"],function(e,t,n,r,i,s,o){var u=i.extend({el:"#sxs-list",events:{"click a":"openSxS"},initialize:function(){var e=this.$el.find(".chunk");this.model=new s({supplementalPath:"sidebar"}),this.model.set(r.getOpenSection(),e.innerHTML),r.on("regSection:open",this.getAnalyses,this),this.modifyListDisplay()},openSxS:function(t){t.preventDefault();var n=e(t.target),i=n.data("sxs-paragraph-id"),s=n.data("doc-number");r.set("sxs-analysis",new o({regParagraph:i,docNumber:s,fromVersion:r.getVersion()}))},getAnalyses:function(e){var t=this.model.get(e);typeof t.done!="undefined"?t.done(function(e){this.render(e)}.bind(this)):this.render(t)},render:function(t){var n=e(t),r=n.find("#sxs-list").html();this.$el.html(r),this.modifyListDisplay()},modifyListDisplay:function(){var e=this.$el.find(".expand-drawer");e.children().length>0?this.highlightHeader():e.text("No analysis available for "+r.getOpenSection())},highlightHeader:function(){this.$el.find("h4").addClass("has-content")}});return u});