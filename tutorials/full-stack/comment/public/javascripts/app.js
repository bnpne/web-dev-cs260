/*global axios */
/*global Vue */
var app = new Vue({
    el: '#app',
    data: {
        comments : [
            {title:'Comment 1', upvotes:5},
            {title:'Comment 2', upvotes:6},
            {title:'Comment 3', upvotes:1},
            {title:'Comment 4', upvotes:4},
            {title:'Comment 5', upvotes:3}
        ],
        test: "Hello World",
    },
    computed: {
        sortedComments() {
            return this.comments.sort((a, b) => {
                var rval = 0;
                if(a.upvotes > b.upvotes) {
                    rval = 1;
                } else if(a.upvotes < b.upvotes) {
                    rval = -1;
                }
                return(rval);
            })
        }
    },
    created: function() {
    },
    methods: {
        incrementUpvotes(item){
            item.upvotes = item.upvotes+1;
        },
        addComment() {
            this.comments.push({ title: this.newComment, upvotes: 0 });
            this.newComment = "";
        },
    }   
  });