import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import { SodaPhones, TropicalCardboardCoin } from '../typechain';

describe('SodaPhones', () => {
  let tropicalCardboardCoin: TropicalCardboardCoin;
  let sodaPhones: SodaPhones;
  const recipient1 = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
  const recipient2 = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8';

  let tccBalance: BigNumber,
    tccSupply: BigNumber,
    spBalace: BigNumber,
    spSupply1: number;

  before(async () => {
    const TropicalCardboardCoin = await ethers.getContractFactory(
      'TropicalCardboardCoin'
    );
    const SodaPhones = await ethers.getContractFactory('SodaPhones');

    tropicalCardboardCoin = await TropicalCardboardCoin.deploy();
    sodaPhones = await SodaPhones.deploy(tropicalCardboardCoin.address);

    await tropicalCardboardCoin.deployed();
    await sodaPhones.deployed();

    await tropicalCardboardCoin.setApprovalForAll(sodaPhones.address, true);

    console.log(tropicalCardboardCoin.address);
  });

  beforeEach(async () => {
    tccBalance = await tropicalCardboardCoin.balanceOf(recipient1, 0);
    tccSupply = await tropicalCardboardCoin.count();
    spBalace = await sodaPhones.balanceOf(recipient1);
    spSupply1 = await sodaPhones.getContentSupply('1.json');
  });

  it('should not mint a SodaPhone when no TropicalCardboardCoin balance', async () => {
    expect(tccBalance).to.equal(0);
    expect(tccSupply).to.equal(0);
    expect(spBalace).to.equal(0);
    expect(spSupply1).to.equal(0);

    await expect(sodaPhones.payToMint(recipient1, '1.json')).to.be.revertedWith(
      'Must own a TropicalCardboardCoin!'
    );
  });

  it('should mint a SodaPhone if there is TropicalCardboardCoin balance', async () => {
    expect(tccBalance).to.equal(0);
    expect(tccSupply).to.equal(0);
    expect(spBalace).to.equal(0);
    expect(spSupply1).to.equal(0);

    await tropicalCardboardCoin.payToMint(recipient1, 0, 2, '0x', {
      value: ethers.utils.parseEther('0.05')
    });

    const newTccBalance = await tropicalCardboardCoin.balanceOf(recipient1, 0);
    const newTccSupply = await tropicalCardboardCoin.count();

    expect(newTccBalance).to.equal(2);
    expect(newTccSupply).to.equal(2);

    const sodaPhoneId = await sodaPhones.payToMint(recipient1, '1.json');

    expect(sodaPhoneId).to.equal(1);

    const newSpBalance = await sodaPhones.balanceOf(recipient1);
    const newSp1Supply = await sodaPhones.getContentSupply('1.json');

    expect(newSpBalance).to.equal(1);
    expect(newSp1Supply).to.equal(1);
  });
});
