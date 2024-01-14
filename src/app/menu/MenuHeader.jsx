import Link from 'next/link'
import React from 'react'

const MenuHeader = () => {
    return (
        <div>
            <div class="food">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <div class="food-item">
                                <i class="flaticon-burger"></i>
                                <h2>Burgers</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.
                                </p>
                                <Link href="">View Menu</Link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="food-item">
                                <i class="flaticon-snack"></i>
                                <h2>Snacks</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.
                                </p>
                                <Link href="">View Menu</Link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="food-item">
                                <i class="flaticon-cocktail"></i>
                                <h2>Beverages</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.
                                </p>
                                <Link href="">View Menu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MenuHeader
