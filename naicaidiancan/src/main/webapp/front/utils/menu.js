const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
			{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"客服聊天",
			            "menuJump":"列表",
			            "tableName":"chat"
			        }
			    ],
			    "menu":"客服聊天"
			}
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"购物车",
                        "menuJump":"列表",
                        "tableName":"cart"
                    }
                ],
                "menu":"购物车"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"商品信息订单",
                        "menuJump":"列表",
                        "tableName":"goodsOrder"
                    }
                ],
                "menu":"我的商品信息订单"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"商品收藏",
                        "menuJump":"列表",
                        "tableName":"goodsCollection"
                    }
                ],
                "menu":"商品收藏"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"商品评价",
                        "menuJump":"列表",
                        "tableName":"goodsCommentback"
                    }
                ],
                "menu":"商品评价"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                        ],
                        "menu":"新闻信息",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"新闻信息"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]

	}
}
export default menu;
