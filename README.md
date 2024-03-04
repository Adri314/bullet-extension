 


> Open this page at [https://adri314.github.io/bullet-extension/](https://adri314.github.io/bullet-extension/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/adri314/bullet-extension** and import

## Edit this project ![Build status badge](https://github.com/adri314/bullet-extension/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/adri314/bullet-extension** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/adri314/bullet-extension/raw/master/.github/makecode/blocks.png)

## Parameter Explanation by function

### Function shootBulletFromSpriteAtAngleWithSpeed:
* myBullet: bullet image. Create a variable to store an image and use it here
* spr: the sprite from which the bullet shoots
* angle: angle of bullet (0 is down, 180 is up)
* spd: the bullet speed
* k: bullet kind. Drag kind block

#### Examples

![arcade-test-bullets (5)](https://github.com/Adri314/bullet-extension/assets/34138145/3d350a01-f392-4286-8a1b-b33eb0e3182c)
![arcade-screenshot (7)](https://github.com/Adri314/bullet-extension/assets/34138145/5e392873-04af-4859-89c0-e0085cc251e3)
![arcade-test-bullets (6)](https://github.com/Adri314/bullet-extension/assets/34138145/a6d8a33a-e0f8-4b98-9c43-8f733821bda8)
![arcade-screenshot (8)](https://github.com/Adri314/bullet-extension/assets/34138145/83d0ce31-07b9-484c-ad64-2ee675a74538)

### Function aimedShotFromSpriteToSpriteWithSpeed:
* myBullet: bullet image. Create a variable to store an image and use it here
* spr: the sprite from which the bullet shoots
* spr2: the target sprite
* spd: the bullet speed
* k: bullet kind. Drag kind block

#### Example

![arcade-test-bullets (7)](https://github.com/Adri314/bullet-extension/assets/34138145/986dbec2-cd28-40a5-beb0-08b460a934c0)
![arcade-screenshot (6)](https://github.com/Adri314/bullet-extension/assets/34138145/abeb71ce-1da0-4e97-a613-69e8d3a44d93)

### Function starBurstFromSprite:
* myBullet: bullet image. Create a variable to store an image and use it here
* spr: the sprite from which the bullet shoots
* n: number of bullets
* spd: the bullet speed
* k: bullet kind. Drag kind block

#### Example

![arcade-test-bullets (9)](https://github.com/Adri314/bullet-extension/assets/34138145/64306052-058f-440b-bc31-e9e14cd30204)
![arcade-screenshot (5)](https://github.com/Adri314/bullet-extension/assets/34138145/c9c96d0c-6552-40e0-a59a-cacdabf6ce25)

### Function fanBurstFromSprite:
* myBullet: bullet image. Create a variable to store an image and use it here
* spr: the sprite from which the bullet shoots
* n: number of bullets
* initAng: initial angle of the fan
* endAng: final angle of the fan
* spd: the bullet speed
* k: bullet kind. Drag kind block

#### Example

![arcade-test-bullets (10)](https://github.com/Adri314/bullet-extension/assets/34138145/8c2a74bc-56b4-420b-9935-d30d4b27772e)
![arcade-screenshot (4)](https://github.com/Adri314/bullet-extension/assets/34138145/de050d64-266f-45f9-adbe-b52f9fbe6583)

## Example with multiple bullet patterns: 

![arcade-screenshot (3)](https://github.com/Adri314/bullet-extension/assets/34138145/6fc82f06-2d5e-42f8-aafd-0f27a6a59a17)

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
