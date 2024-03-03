
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

const EnemyBullet = SpriteKind.create()
const Bullet = SpriteKind.create()

enum MyEnum {
    //% block="Bullet"
    Bullet,
    //% block="Enemy Bullet"
    EnemyBullet
}

/**
 * Custom blocks
 */
//% weight=100 color=#808080 icon="\uf062"
namespace bullets {
    /**
   * This function shoots a bullet with the image selected 
   * from a sprite in the game to another sprite
   * with chosen speed
   * myBullet: bullet image. Create a variable to store an image and use it here
   * spr: the sprite from which the bullet shoots
   * spr2: the target sprite
   * spd: the bullet speed
   * e: bullet kind
   */
    //% block
    export function aimedShotFromSpriteToSpriteWithSpeed(myBullet: any, spr: Sprite, spr2: Sprite, spd: number, e:MyEnum): void {
        let ang = Math.atan2(spr2.x - spr.x, spr2.y - spr.y) / 0.0174533
        shootBulletFromSpriteAtAngleWithSpeed(myBullet, spr, ang, spd, e)

    }
    
    /**
    * This function shoots a bullet with the image selected
    * from a sprite in the game
    * a number of times around the sprite
    * with chosen speed
    * myBullet: bullet image. Create a variable to store an image and use it here
    * spr: the sprite from which the bullet shoots
    * n: number of bullets
    * spd: the bullet speed
    * e: bullet kind
    */
    //% block
    export function starBurstFromSprite(myBullet: any, spr: Sprite, n: number, spd: number, e: MyEnum): void {

        for (let i = 0; i < n; i++) {
            shootBulletFromSpriteAtAngleWithSpeed(myBullet, spr, i*360/n, spd, e)
        }
    }

    /**
    * This function shoots a bullet with the image selected
    * from a sprite in the game
    * at an angle (in degrees, 0 is down, 180 is up)
    * with chosen speed
    * myBullet: bullet image. Create a variable to store an image and use it here
    * spr: the sprite from which the bullet shoots
    * angle: angle of bullet
    * spd: the bullet speed
    * e: bullet kind
    */
    //% block
    export function shootBulletFromSpriteAtAngleWithSpeed(myBullet: any, spr: Sprite, angle: number, spd: number, e: MyEnum): void {
        let projectile = sprites.createProjectileFromSprite(myBullet, spr, Math.sin(angle * 0.0174533) * spd, Math.cos(angle * 0.0174533) * spd)
        
        if (e==0) {
            projectile.setKind(SpriteKind.Bullet)
        } else {
            projectile.setKind(SpriteKind.EnemyBullet)
        }
    }

}
