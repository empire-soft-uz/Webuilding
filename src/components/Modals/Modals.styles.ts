import styled from "styled-components";
import { COLORS, addAlpha } from "../../constants/color";
import { FONTS, RESPONSIVE } from "../../constants/constants";

export const CallMeLaterModalContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background: ${addAlpha(COLORS.purple, 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;

  &.active {
    z-index: 999;
    opacity: 1;
  }

  &.none {
    z-index: -999;
    opacity: 0;
  }

  .modal {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px;
    background: ${COLORS.white};
    width: 324px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 12px;
    z-index: 1;

    @media (min-width: ${RESPONSIVE.laptop}) {
      width: 351px;
    }
    .title {
      color: #01392a;
      text-align: center;
      font-size: 23px;
      line-height: 27px;
      font-weight: 500;
      font-family: ${FONTS.m5};

      @media (min-width: ${RESPONSIVE.tablet}) {
        font-size: 30.4px;
        line-height: 1.2;
        margin-bottom: 0.3rem;
      }
    }

    .description {
      color: #788179;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      font-family: ${FONTS.m4};
      text-align: center;

      @media (min-width: ${RESPONSIVE.laptop}) {
        margin-bottom: 10px;
      }
    }

    .inputContainer {
      padding: 5px;
      background: #f4f7f5;
      padding-left: 48px;
      position: relative;
      margin: 12px 0;
      border-radius: 20px;
      display: flex;
      align-items: center;

      @media (min-width: ${RESPONSIVE.laptop}) {
        padding: 10px;
        padding-left: 48px;
      }

      label {
        display: flex;
        align-items: center;
      }

      .icon {
        position: absolute;
        left: 20px;
      }

      input {
        width: 252px;
        border: none;
        color: #002c20;
        font-size: 12px;
        height: 30px;
        background: transparent;
        outline: none;

        @media (min-width: ${RESPONSIVE.laptop}) {
          font-size: 13px;
        }
      }
    }

    button {
      width: 100%;
      height: 36px;
      font-size: 15px;
      background: ${COLORS.purple};
      border-radius: 24px;
      color: ${COLORS.white};
      cursor: pointer;
      border: 0.05rem solid ${COLORS.purple};
      margin: 20px 0;
      transition: 0.4s ease;
      &:hover {
        background: transparent;
        color: #858585;
        border-color: #858585;
      }

      @media (min-width: ${RESPONSIVE.laptop}) {
        height: 50px;
      }
    }

    .footer {
      padding-top: 9.6px;
      border-top: 1px solid #e7e5ea;

      p {
        font-size: 11.2px;
        color: #788179;
        line-height: 170%;
        text-align: center;
        @media (min-width: ${RESPONSIVE.laptop}) {
          font-size: 12px;
        }
      }
    }
  }

  .cancel_window {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;
export const ICallYouNowContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${addAlpha(COLORS.purple, 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;

  &.active {
    z-index: 999;
    opacity: 1;
  }

  &.none {
    z-index: -999;
    opacity: 0;
  }

  .modal {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px;
    background: ${COLORS.white};
    width: 324px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 12px;
    z-index: 1;

    button {
      width: 100%;
      height: 36px;
      font-size: 15px;
      background: ${COLORS.purple};
      border-radius: 24px;
      color: ${COLORS.white};
      cursor: pointer;
      border: 0.05rem solid ${COLORS.purple};
      margin: 20px 0;
      transition: 0.4s ease;
      position: relative;
      &:hover {
        background: transparent;
        color: #858585;
        border-color: #858585;
      }

      .icon {
        position: absolute;
        left: 40px;
        top: 10px;
        font-size: 17px;

        @media (min-width: ${RESPONSIVE.laptop}) {
          top: 15px;
        }
      }

      @media (min-width: ${RESPONSIVE.laptop}) {
        height: 50px;
      }
    }

    .footer {
      padding-top: 9.6px;
      border-top: 1px solid #e7e5ea;

      p {
        font-size: 11.2px;
        color: #788179;
        line-height: 170%;
        text-align: center;

        @media (min-width: ${RESPONSIVE.laptop}) {
          font-size: 12px;
        }
      }
    }
  }

  .cancel_window {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;
export const AdvertisingNowContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${addAlpha(COLORS.black, 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;

  &.active {
    z-index: 999;
    opacity: 1;
  }

  &.none {
    z-index: -999;
    opacity: 0;
  }

  .cancel_window {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .imageBox {
    position: relative;
    @media (min-width: ${RESPONSIVE.minPhone}) {
      width: 90%;
      height: 300px;
    }
    @media (min-width: ${RESPONSIVE.phone}) {
      width: 90%;
      height: 500px;
    }
    @media (min-width: ${RESPONSIVE.largeDevice}) {
      width: 900px;
      height: 500px;
    }
  }
  .image {
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  .closeBtn {
    position: absolute;
    top: -25px;
    right: -15px;
    z-index: 1000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;

export const CartFilterNowContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${addAlpha(COLORS.black, 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;

  &.active {
    z-index: 999;
    opacity: 1;
  }

  &.none {
    z-index: -999;
    opacity: 0;
  }

  .cancel_window {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .filterBox {
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    overflow-y: auto;
    padding: 30px;
    @media (min-width: ${RESPONSIVE.minPhone}) {
      max-width: 420px;
    }
    @media (min-width: ${RESPONSIVE.phone}) {
      max-width: 420px;
    }
    @media (min-width: ${RESPONSIVE.largeDevice}) {
      max-width: 420px;
    }
  }
  .topBox {
    position: relative;
  }
  .bottomBox {
    border: 1px solid red;
  }
  .filterPrimary {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;
export const LanguageNowContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  &.active {
    z-index: 999;
    opacity: 1;
  }

  &.none {
    z-index: -999;
    opacity: 0;
  }

  .language {
    position: relative;
    background-color: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 5px 5px 20px "#000";
    width: 100%;

  }
  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:20px;
    width: 100%;
    padding:0 15px;
  }
  .btn1 {
    background-color: yellow;
    border: 0.5px solid #fff;
    cursor: pointer;
    padding: 10px;
    @media (min-width: ${RESPONSIVE.minPhone}) {
      width: 120px;
    }
    @media (min-width: ${RESPONSIVE.phone}) {
      width: 120px;
    }
    @media (min-width: ${RESPONSIVE.largeDevice}) {
      width: 120px;
      box-shadow: 5px 5px 0px "#000";
    }
  }
  .btn1:active{
    transform: scale(1.1,1.1);
  }
  .btn2 {
    background-color: #101010;
    border: 0.5px solid #fff;
    cursor: pointer;
    padding: 10px;
    color: #fff;
    @media (min-width: ${RESPONSIVE.minPhone}) {
      width: 120px;
    }
    @media (min-width: ${RESPONSIVE.phone}) {
      width: 150px;
    }
    @media (min-width: ${RESPONSIVE.largeDevice}) {
      width: 120px;
      box-shadow: 5px 5px 0px "#000";
    }
    scale(2, 3)
  }
  .btn2:active{
    transform: scale(1.1,1.1);
  }.title{
    padding:0 10px;
  }
  .title h4{
    color:black;
    font-size:15px
  }
  .title p{
    color:black;
    font-size:13px;
    margin-top:5px;
  }
`;
